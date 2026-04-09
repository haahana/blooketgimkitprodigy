fetch('http://localhost:3000/api/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    firstName: 'Test',
    lastName: 'Backend',
    email: 'test@example.com',
    password: 'password123',
    locationText: 'Test Location'
  })
}).then(res => res.json()).then(console.log).catch(console.error);
