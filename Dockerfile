# =========================
# STAGE 1 — BUILD
# =========================
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build --omit=dev

# =========================
# STAGE 2 — NGINX
# =========================
FROM nginx:alpine

# Limpa o conteúdo padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia o build (cobre Angular 17 e 18+)
COPY --from=build /app/dist/sirius-dashboard /usr/share/nginx/html

# Verifica e ajusta a estrutura do build do Angular
RUN if [ -d /usr/share/nginx/html/browser ]; then \
        mv /usr/share/nginx/html/browser/* /usr/share/nginx/html/ && \
        rm -rf /usr/share/nginx/html/browser; \
    fi

# Copia configuração customizada do nginx se existir
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]