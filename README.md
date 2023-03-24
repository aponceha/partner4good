# finalproject



### Requirements

1. CAUSE represnetitive can create an USER account with an `email` and `password`

2. A *USER* can fill in their *CAUSE* with charity `name`, `description`, `picture`, `contact name`, `category`, `address`.
3. When creating a CAUSE, the USER can select from a predefined option list of CATEGORIES
    - LGBTQ
    - Food Security
    - Envrionmental 
    - Mental Health 
    - Diversity, Equity, and Inclusion 
4. As a USER, I want to be able to view my CAUSE, so that I can verify the information for my CAUSE is correct.
5. As a USER, I want to be able to edit my profile, so that I can make updates to some/all the fields
6. As a USER, when loging into tha app, I want to see a home page where a few CAUSES profiles are displayed, so that I can get interigued by them.
7. As a USER, when on the Home Page, I want to see a button to view more CAUSES which will redirect to the CAUSES Page when clicked so that I can find the CAUSE I'm interested in.
8. As a USER, when on the CAUSES Page, I want to have an infinite scroll of CAUSES cards so that I have an easy way to explore them.
9. A a USER, when on the CAUSES Page, I want to be able to narrow what CAUSES I view by category by clicking a filter dropdown menu. 




#### Domain

USER
- _id: ID
- email: string
- password: string


CAUSE
- _id: ID
- name: string
- description: string
- picture: TBD
- contactName: string
- category: ID
- address: string
- user: ID


CATEGORY
- _id: ID
- name: string