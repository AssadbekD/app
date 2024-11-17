fetch('/api/resume')
    .then(response => response.json())
    .then(data => {
        document.querySelector('header h1').innerText = data.name;
        document.querySelector('header p').innerText = "DevOps Intern | Алматы";
        document.querySelector('#contact ul').innerHTML = `
            <li><strong>Phone:</strong> ${data.phone}</li>
            <li><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></li>
        `;
        document.querySelector('#skills ul').innerHTML = data.skills.map(skill => `<li>${skill}</li>`).join('');
        document.querySelector('#education p').innerText = data.education;
    })
    .catch(error => console.error('Error fetching resume:', error));
