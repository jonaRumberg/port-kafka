// shared code
import { Kafka } from 'kafkajs';

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


export { 
	kafka
};

