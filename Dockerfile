# Estagio 1 - Responsável por gerar o build da nossa aplicação
FROM node as node
WORKDIR /app
COPY package.json /app/
RUN npm i npm@latest -g
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm run build

# Estagio 2 - Responsável por expor nossa aplicação
FROM nginx
COPY --from=node /app/dist/gym-ui/browser /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# expose port 80
EXPOSE 80 443