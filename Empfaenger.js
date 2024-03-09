import { kafka } from './Gemeinsam.js'

const consumer = kafka.consumer({ groupId: 'jonarumberg-aufgabenblatt' })
await consumer.connect()

await consumer.subscribe({ topic: 'WWI22B5.RumbergJona.Aufgabenblatt', fromBeginning: true })

await consumer.run({
	eachMessage: async ({ topic, partition, message }) => {
	
		let film = JSON.parse(message.value.toString())

		console.log('Film received: ')
		console.log('Title: ' + film.title)
		console.log('Runtime: ' + Math.floor(film.runtime/60) + 'h ' + film.runtime%60 + 'min')
		console.log('Genre: ' + film.genre)

	},
})
