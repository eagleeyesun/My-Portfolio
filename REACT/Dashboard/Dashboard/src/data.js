let username = 'coalition';
let password = 'skills-test';
let auth = btoa(`${username}:${password}`);

const patient = fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
	headers: {
		'Authorization': `Basic ${auth}`
	}
}).then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('API response not OK');
})
.catch(error => {
  console.error('Fetch error:', error);
  throw error;
});

export default patient;