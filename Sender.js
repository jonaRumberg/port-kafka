import { kafka } from './Gemeinsam.js'
import readlineSync from 'readline-sync';

// connect the producer to the kafka server
const prod = kafka.producer()
await prod.connect()



// input loop
let running = true
while (running) {
	let input = {}
	input.title = readlineSync.question('Enter a film title: ')
	input.runtime = readlineSync.question('Enter the films runtime in minutes: ')
	input.genre = readlineSync.question('Enter the films genre: ')
	if (input.title === 'exit') {
		running = false
	} else {
		await prod.send({
			topic: 'WWI22B5.RumbergJona.Aufgabenblatt',
			messages: [
				{ key: "film", value: JSON.stringify(input) },
			]
		})
	}
}

// disconnect the producer from the kafka server after use
await prod.disconnect()
