FROM meetingbooking/user_service:1.0

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . . 

ENV PORT=4002

EXPOSE 4002

CMD ["npm", "run", "server"]