const { Kafka } = require('kafkajs');

//user: dhbw password: dhbw

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

send()

async function send() {
	const prod = kafka.producer()
	await prod.connect()

	await prod.send({
		topic: 'WWI22B5.RumbergJona.Aufgabenblatt',
		messages: [
			{ key: "test", value: "asdf" }
		]
	})

	await prod.disconnect()
}
