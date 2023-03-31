const { Cause } = require('../models');

const createCauses = async () => { 
    const causes = [
        { 
            name: 'Plant With Purpose',
            description: 'At Plant With Purpose, we restore hope by reversing two of the worlds greatest challenges: global poverty and environmental damage. These problems are interconnected. Our goal is to see creations life-giving regenerative cycles restored and people renewed through their relationship to God, living in healthy sufficiency and empowered to dream.',
            contactName: 'Pam',
            contactEmail: 'pam@test.com',
            // category: 1,
            headquarters: 'Yellowknife',
            // user: '',
            websiteLink: 'https://plantwithpurpose.org/?gclid=CjwKCAjw5pShBhB_EiwAvmnNVz5TTJOfdw4GXryDe9IUNlGngdeVfVvmw72tZyYV0qKyJuTgz1EUnhoCseAQAvD_BwE'
        },
        { 
            name: 'The Inclusion Project',
            description: 'The Inclusion Project (TIP) aims to advance equity, diversity, and inclusion in Canadian society by actively engaging partners and decisionmakers, through research, knowledge development and community. Our Accessibility, Racial Equity, Diversity, and Inclusion (AREDI+) process takes an intersectional and iterative approach to addressing complex issues of race-based, gendered and other forms of discrimination. Our Anti-Racism Anti-Harassment (ARAH) framework covers specific action to eliminate behaviors and policies that may prevent racialized Canadians and newcomers to Canada from accessing equitable opportunities based on racial, gendered and (dis)ability-based discrimination.',
            contactName: 'Timmy',
            contactEmail: 'tim@test.com',
            // category: 2,
            headquarters: 'Toronto',
            // user: '',
            websiteLink: 'https://www.theinclusionproject.com/'
        },
        { 
            name: 'Egale',
            description: 'Egale is Canadas leading organization for 2SLGBTQI people and issues. We improve and save lives through research, education, awareness, and by advocating for human rights and equality in Canada and around the world. Our work helps create societies and systems that reflect the universal truth that all persons are equal and none is other.',
            contactName: 'Elliot',
            contactEmail: 'elliot@test.com',
            // category: 3,
            headquarters: 'Montreal',
            // user: '',
            websiteLink: 'https://egale.ca/'
        },
        { 
            name: 'The Canadian Alliance to End Homelessness',
            description: 'The Canadian Alliance to End Homelessness leads a national movement of individuals, organizations and communities working together to end homelessness in Canada.',
            contactName: 'Cameron',
            contactEmail: 'cameron@test.com',
            // category: 4,
            headquarters: 'Vancouver',
            // user: '',
            websiteLink: 'https://caeh.ca/'
        },
        { 
            name: 'Food Secure Canada',
            description: 'Food Secure Canada is a pan-Canadian alliance of organizations and individuals working together to advance food security and food sovereignty through three interlocking goals: zero hunger, healthy and safe food, and sustainable food systems.',
            contactName: 'Frankie',
            contactEmail: 'frankie@test.com',
            // category: 5,
            headquarters: 'Saskatoon',
            // user: '',
            websiteLink: 'https://foodsecurecanada.org/'
        }
    ];
    await Cause.insertMany(causes);
}

const removeAllCauses = async () => {
    await Cause.deleteMany({});
}

module.exports = { createCauses, removeAllCauses };
