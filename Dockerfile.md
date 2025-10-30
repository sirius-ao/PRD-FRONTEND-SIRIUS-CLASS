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
COPY --from=build /app/dist/sirius-dashboard /dist

# Se existir /browser, usa-o, senão usa /dist raiz
RUN if [ -d /dist/browser ]; then cp -r /dist/browser/* /usr/share/nginx/html; else cp -r /dist/* /usr/share/nginx/html; fi

# (Opcional) copia config customizada do nginx
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
