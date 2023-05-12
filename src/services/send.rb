const amqp = require('amqplib');

async function main() {
  // Establecer conexión con RabbitMQ
  const connection = await amqp.connect('amqp://localhost');

  // Crear un canal
  const channel = await connection.createChannel();

  // Definir una cola
  const queueName = 'mi-cola';
  await channel.assertQueue(queueName, { durable: true });

  // Publicar un mensaje en la cola
  const message = 'Hola, mundo!';
  channel.sendToQueue(queueName, Buffer.from(message), { persistent: true });

  // Cerrar la conexión con RabbitMQ
  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});