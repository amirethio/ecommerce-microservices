FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN npx prisma generate
RUN pnpm build

EXPOSE 3009

CMD sh -c "pnpm prisma:migrate && pnpm start:prod"