const { Cause, User, Category } = require('../models');

const createCauses = async () => { 
    const causes = [
        { 
            name: 'Plant With Purpose',
            description: 'At Plant With Purpose, we restore hope by reversing two of the worlds greatest challenges: global poverty and environmental damage. These problems are interconnected. Our goal is to see creations life-giving regenerative cycles restored and people renewed through their relationship to God, living in healthy sufficiency and empowered to dream.',
            contactName: 'Pam',
            contactEmail: 'pam@test.com',
            category: 'Environment',
            headquarters: 'Yellowknife',
            user: 'pam@test.com',
            websiteLink: 'https://plantwithpurpose.org/?gclid=CjwKCAjw5pShBhB_EiwAvmnNVz5TTJOfdw4GXryDe9IUNlGngdeVfVvmw72tZyYV0qKyJuTgz1EUnhoCseAQAvD_BwE'
        },
        { 
            name: 'The Inclusion Project',
            description: 'The Inclusion Project (TIP) aims to advance equity, diversity, and inclusion in Canadian society by actively engaging partners and decisionmakers, through research, knowledge development and community. Our Accessibility, Racial Equity, Diversity, and Inclusion (AREDI+) process takes an intersectional and iterative approach to addressing complex issues of race-based, gendered and other forms of discrimination.',
            contactName: 'Timmy',
            contactEmail: 'tim@test.com',
            category: 'Diversity, Equity, Inclusion',
            headquarters: 'Toronto',
            user: 'tim@test.com',
            websiteLink: 'https://www.theinclusionproject.com/'
        },
        { 
            name: 'Egale',
            description: 'Egale is Canadas leading organization for 2SLGBTQI people and issues. We improve and save lives through research, education, awareness, and by advocating for human rights and equality in Canada and around the world. Our work helps create societies and systems that reflect the universal truth that all persons are equal and none is other.',
            contactName: 'Elliot',
            contactEmail: 'elliot@test.com',
            category: 'LGBTQ',
            headquarters: 'Montreal',
            user: 'elliot@test.com',
            websiteLink: 'https://egale.ca/'
        },
        { 
            name: 'The Canadian Alliance to End Homelessness',
            description: 'The Canadian Alliance to End Homelessness leads a national movement of individuals, organizations and communities working together to end homelessness in Canada.',
            contactName: 'Cameron',
            contactEmail: 'cameron@test.com',
            category: 'Homelessness',
            headquarters: 'Vancouver',
            user: 'cameron@test.com',
            websiteLink: 'https://caeh.ca/'
        },
        { 
            name: 'Food Secure Canada',
            description: 'Food Secure Canada is a pan-Canadian alliance of organizations and individuals working together to advance food security and food sovereignty through three interlocking goals: zero hunger, healthy and safe food, and sustainable food systems.',
            contactName: 'Frankie',
            contactEmail: 'frankie@test.com',
            category: 'Food Security',
            headquarters: 'Saskatoon',
            user: 'frankie@test.com',
            websiteLink: 'https://foodsecurecanada.org/'
        },
        { 
            name: 'CAMH',
            description: 'Many people do not see mental illness in the same way, or even the same category, as other diseases medical science is working hard to find cures for. But Mental Health is Health. And with every new discovery, CAMH moves closer to treatments that will change the course of mental health forever.',
            contactName: 'Frankie',
            contactEmail: 'frankie@test.com',
            category: 'Homelessness',
            headquarters: 'Whitehorse',
            user: 'frankie@test.com',
            websiteLink: 'https://www.camh.ca/'
        }
    ];

    for(let cause of causes) {
        const user = await User.findOne({email: cause.user });
        const category = await Category.findOne({name: cause.category });

        cause.user = user._id;
        cause.category = category._id;

        await Cause.create(cause);
    }
}

const removeAllCauses = async () => {
    await Cause.deleteMany({});
}

module.exports = { createCauses, removeAllCauses };