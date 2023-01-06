FROM node:16-alpine
WORKDIR /app
COPY package.json ./
COPY ./ ./
RUN npm i
ENV PORT 6002
EXPOSE 6002
CMD ["npm", "run", "dev"]