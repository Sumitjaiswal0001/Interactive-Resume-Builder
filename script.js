document.getElementById('generate-btn').addEventListener('click', function() {
    // Get user inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;

    // Generate resume template
    const resumeTemplate = `
        <h1>${name}</h1>
        <p>${email} | ${phone} | ${address}</p>
        <h2>Professional Summary</h2>
        <p>${summary}</p>
        <h2>Experience</h2>
        <p>${experience}</p>
        <h2>Education</h2>
        <p>${education}</p>
        <h2>Skills</h2>
        <p>${skills}</p>
    `;

    // Display resume
    document.getElementById('resume-template').innerHTML = resumeTemplate;
});

// Optional: Export resume as PDF
document.getElementById('export-btn').addEventListener('click', function() {
    const resumeElement = document.getElementById('resume-template');
    const opt = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(resumeElement).set(opt).save();
});
