context('Actions', {
    env: {
        railflow: {
            case_type: 'Railflow',
            case_priority: "Critical",
            case_fields: ["Required text field= Some value from cypress", "Estimate=10s"],
            result_fields: ['Custom field = Result from cypress'],
            smart_failure_assignment: ['user1@company.net', 'user2@company.net']
        }
    }
}, () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions')
    })

    it('.type() - type into a DOM element',
        {
            env: {
                railflow: {
                    title: 'Type something into a DOM element',
                    case_priority: "High",
                }
            }
        }, () => {
            cy.get('.action-email')
                .type('fake@email.com').should('have.value', 'fake@email.com')

                // .type() with special character sequences
                .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
                .type('{del}{selectall}{backspace}')

                // .type() with key modifiers
                .type('{alt}{option}') //these are equivalent
                .type('{ctrl}{control}') //these are equivalent
                .type('{meta}{command}{cmd}') //these are equivalent
                .type('{shift}')

                // Delay each keypress by 0.1 sec
                .type('slow.typing@email.com', {delay: 100})
                .should('have.value', 'slow.typing@emailq.com')

            cy.get('.action-disabled')
                // Ignore error checking prior to type
                // like whether the input is visible or disabled
                .type('disabled error checking', {force: true})
                .should('have.value', 'disabled error checking')
        })

    it('.type() - type something different into a DOM element', {
        env: {
            railflow: {
                testrail_ids: [1544]
            }
        }
    }, () => {
        cy.get('.action-email')
            .type('fake@email.com').should('have.value', 'fake@email.com')
    })
})
