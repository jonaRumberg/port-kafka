const { Kafka } = require('kafkajs');

//user: dhbw password: dhbw

const kafka = new Kafka({
	clientId: 'my-app',
	brokers: ['zimolong.eu:9092'],
	user: 'dhbw',
	password: 'dhbw'
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
