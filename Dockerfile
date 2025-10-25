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

# Copia o build do Angular
COPY --from=build /app/dist/sirius-dashboard /usr/share/nginx/html

# Corrige a estrutura de diretórios se necessário
RUN if [ -d /usr/share/nginx/html/browser ]; then \
        cp -r /usr/share/nginx/html/browser/* /usr/share/nginx/html/ && \
        rm -rf /usr/share/nginx/html/browser; \
    fi

# Configuração básica do Nginx sem arquivo externo
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html index.htm; \
    location / { \
        try_files \$uri \$uri/ /index.html; \
    } \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Corrige permissões
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]