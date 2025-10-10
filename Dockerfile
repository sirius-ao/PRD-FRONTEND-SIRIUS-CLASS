# =========================
# STAGE 1 — BUILD
# =========================
FROM node:20-alpine AS build

# Define diretório de trabalho
WORKDIR /app

# Copia apenas arquivos de dependências primeiro (para cache eficiente)
COPY package*.json ./

# Instala dependências
RUN npm ci

# Copia todo o restante do código
COPY . .

# Compila a aplicação Angular
RUN npm run build --omit=dev

# =========================
# STAGE 2 — NGINX
# =========================
FROM nginx:alpine

# Remove configuração default do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia o build Angular (ajustado para ambas as estruturas)
# Angular 18+ → dist/<app>/browser
# Angular ≤17 → dist/<app>
COPY --from=build /app/dist/sirius-dashboard/browser /usr/share/nginx/html 2>/dev/null || \
    COPY --from=build /app/dist/sirius-dashboard /usr/share/nginx/html \

# Copia configuração customizada do nginx (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80

# Comando padrão
CMD ["nginx", "-g", "daemon off;"]
