const members = [
  { name: "ABHIMAAN KUMAR" },
  { name: "KRISH KUMAR", contactCard: "https://imkkrish.github.io/Krish.github.io/" },
  { name: "PRIYANSHU VERMA", contactCard: "https://priyanshuv17.github.io/priyanshu.github.io/" },
  { name: "ADITYA S. CHANDEL", contactCard: "https://adsingh2004.github.io/ASC.github.io/" },
  { name: "ADITYA SINGH" },
  { name: "AKASH KUMAR" },
  { name: "ANSHUMAN SAMANTA" },
  { name: "BAIBHAV K.CHANDRA" },
  { name: "MD.RIYAZ HAIDER" },
  { name: "MONALISHA ANAND", contactCard: "https://monaanand20.github.io/contact-card/" },
  { name: "OM VISHESH", contactCard: "https://omvishesh.github.io/contact-card/" },
  { name: "SAKET TRIPATHI", contactCard: "https://tripathijii147.github.io/saket.github.io/" },
  { name: "SANDEEP MAHATO", contactCard: "https://sandeepmahato1.github.io/Sandeep.github.io/" },
  { name: "SOUMYA R.NAYAK" },
  { name: "ADITYA ASHISH" },
  { name: "ADITYA KUMAR", contactCard: "https://aditya24022005.github.io/Aditya_Contact_Card/" },
  { name: "APURBA DAS", contactCard: "https://apurbasbjk30.github.io/apurba.github.io/" },
  { name: "BASIL JOY", contactCard: "https://basiljoy91.github.io/basil.github.io/" },
  { name: "DIWAKAR SINGH", contactCard: "https://diwakarsingh16.github.io/Diwakar.github.io/" },
  { name: "HEMANT PRAKASH", contactCard: "https://hemantprakash2005.github.io/Hemant.github.io/" },
  { name: "KEERTI L.CHOUDHURY" },
  { name: "KHUSHI KUMARI", contactCard: "https://khushikumari75.github.io/contactcard/" },
  { name: "MD. TARIK ANWAR" },
  { name: "NAMRATA DEY", contactCard: "https://namrata2910.github.io/Namrata.github.io/" },
  { name: "NEHA KUMARI", contactCard: "https://nekochan280.github.io/Neko.github.io/" },
  { name: "NISHA KUMARI", contactCard: "https://7h3s74r5.github.io/nishacontactcard/" },
  { name: "PRASHANT DUBEY", contactCard: "https://prashantdubeypng.github.io/Prashant.github.io/" },
  { name: "RAVINANDAN SAMRAT", contactCard: "https://oravisingh.github.io/Ravinandan-Samrat-Singh/" },
  { name: "SHRADHA SINGH", contactCard: "https://shradhasingh22.github.io/shradha/" },
  { name: "SIYA MANDAL", contactCard: "https://siya2910.github.io/siya.github.io/" },
  { name: "VIDIT MISHRA", contactCard: "https://vidit2406.github.io/vidit_Contact_card/" }
];

const alumni = [
  {
      name: "Alumni 1",
      contactCard: "",
      leetcode: "",
      linkedin: "/"
  },
  // Add other alumni here
];

function generateMemberList(members, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Clear existing content

  members.forEach(member => {
      const memberDiv = document.createElement('div');
      memberDiv.classList.add('member');
      memberDiv.textContent = member.name;

      if (member.contactCard) {
          const contactCardLink = document.createElement('a');
          contactCardLink.href = member.contactCard;
          contactCardLink.innerHTML = "<i class='fas fa-id-card'></i>";
          contactCardLink.classList.add('custom-link');
          memberDiv.appendChild(contactCardLink);
      }

      if (member.github) {
          const githubLink = document.createElement('a');
          githubLink.href = member.github;
          githubLink.innerHTML = "<i class='fab fa-github'></i>";
          githubLink.classList.add('custom-link');
          memberDiv.appendChild(githubLink);
      }

      if (member.leetcode) {
          const leetcodeLink = document.createElement('a');
          leetcodeLink.href = member.leetcode;
          leetcodeLink.innerHTML = "<i class='fas fa-code'></i>";
          leetcodeLink.classList.add('custom-link');
          memberDiv.appendChild(leetcodeLink);
      }

      if (member.linkedin) {
          const linkedinLink = document.createElement('a');
          linkedinLink.href = member.linkedin;
          linkedinLink.innerHTML = "<i class='fab fa-linkedin'></i>";
          linkedinLink.classList.add('custom-link');
          memberDiv.appendChild(linkedinLink);
      }

      container.appendChild(memberDiv);
  });
}

document.getElementById('membersButton').addEventListener('click', function() {
  generateMemberList(members, 'membersContent');
  document.getElementById('membersContent').style.display = 'grid';
  document.getElementById('alumniContent').style.display = 'none';
  document.querySelector('.default-content').style.display = 'none';
});

document.getElementById('alumniButton').addEventListener('click', function() {
  generateMemberList(alumni, 'alumniContent');
  document.getElementById('membersContent').style.display = 'none';
  document.getElementById('alumniContent').style.display = 'block';
  document.querySelector('.default-content').style.display = 'none';
});

// Initialize the members list on page load
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('membersContent').style.display = 'none';
  document.getElementById('alumniContent').style.display = 'none';
});
