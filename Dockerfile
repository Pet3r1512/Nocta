FROM node:23-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .

ENV PORT=9000

EXPOSE 9000

RUN pnpm build

CMD ["pnpm", "dev", "--host", "--port", "9000"]