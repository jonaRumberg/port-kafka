const { Kafka } = require('kafkajs');

// I want to connect to a kafka server running here: zimolong.eu:9092
const kafka = new Kafka({
	clientId: 'nodejs-kafka-sender',
	brokers: ['zimolong.eu:9092'],
	sasl: {
        mechanism: 'plain',
        username: 'dhbw',
        password: 'dhbw'
    },
    ssl: false, // Disabling SSL as you're using SASL_PLAINTEXT
})

// I want to consume messages from the topic WWI22B5.RumbergJona.Aufgabenblatt
consume()

// This function consumes messages from the topic WWI22B5.RumbergJona.Aufgabenblatt
async function consume() {

	// I want to consume messages from the topic WWI22B5.RumbergJona.Aufgabenblatt
	const consumer = kafka.consumer({ groupId: 'jonarumberg-aufgabenblatt' })

	// I want to connect to the kafka server
	await consumer.connect()

	// I want to subscribe to the topic WWI22B5.RumbergJona.Aufgabenblatt
	await consumer.subscribe({ topic: 'WWI22B5.RumbergJona.Aufgabenblatt', fromBeginning: true })

	// I want to consume messages from the topic WWI22B5.RumbergJona.Aufgabenblatt
	await consumer.run({
		eachMessage: async ({ topic, partition, message }) => {
			console.log({
				value: message.value.toString(),
			})
		},
	})
}
