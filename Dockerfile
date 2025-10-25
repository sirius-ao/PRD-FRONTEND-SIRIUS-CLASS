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

# Copia o build do Angular (versão compatível com Angular 17+)
COPY --from=build /app/dist/sirius-dashboard /usr/share/nginx/html

# Corrige a estrutura de diretórios se necessário
RUN if [ -d /usr/share/nginx/html/browser ]; then \
        cp -r /usr/share/nginx/html/browser/* /usr/share/nginx/html/ && \
        rm -rf /usr/share/nginx/html/browser; \
    fi

# Copia configuração customizada do nginx (CRÍTICO)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Corrige permissões
RUN chmod -R 755 /usr/share/nginx/html && \
    chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]