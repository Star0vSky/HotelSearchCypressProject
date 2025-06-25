///<reference types = "Cypress"/>

const { should } = require("chai")

describe('The car tab test will verify the car functionality', () => {

    const car_tab = '[data-cy="Car"]';
    const origin_placeholder = '[name="location"]';
    const pick_up_input = '[name="pickup"]';
    const drop_off_input = '[name="dropoff"]';
    const car_group_list = '[name="car-group"]';
    const driver_age_list = '[name="driver-age"]';

    beforeEach(() => {

        cy.visit('http://localhost:3000')
        cy.get(car_tab).click()

    })

    it('navigate to the car tab', () => {

        cy.get(origin_placeholder).should('be.visible')
        cy.get(car_tab).invoke('attr', 'aria-expanded').should('eq', 'true')
        cy.get(car_tab).invoke('text').should('eq', 'car')

    })

    it('Hotel location', () => {

        // cy.get(origin_placeholder).type("Leon, Bonne Voyage").invoke("val").should('eq', 'Leon, Bonne Voyage')
        cy.get(origin_placeholder).type("Leon, Bonne Voyage").should('have.value', 'Leon, Bonne Voyage')

    })

    it('pick up date', () => {

        cy.get(pick_up_input).clear().type('07/03/2024').should('have.value', '07/03/2024')
        // cy.get(pick_up_input).type('07/03/2024').should('have.value', '07/03/2024')

        // })

        // it('drop off date', () => {

        cy.get('body').click(0, 0)
        cy.get(drop_off_input).clear()
        cy.get(drop_off_input).type('05/08/2025').should('have.value', '05/08/2025')

    })

    it('car group', () => {

        cy.get(car_group_list).should('be.visible')
        cy.get(car_group_list).select('Group 1', {force: true})
        cy.get('[title="Group 1"]').should('be.visible')

        cy.get(car_group_list).select('Group 2', {force: true})
        cy.get('[title="Group 2"]').should('be.visible')

        cy.get(car_group_list).select('Group 3', {force: true})
        cy.get('[title="Group 3"]').should('be.visible')
    })

    it('driver age', () => {

        cy.get(driver_age_list).should('be.visible')
        cy.get(driver_age_list).select('23', {force: true})
        cy.get('[title ="23"]').should('be.visible')

        cy.get(driver_age_list).select('24', {force: true})
        cy.get('[title ="24"]').should('be.visible')

        cy.get(driver_age_list).select('25', {force: true}).should('have.value', '25')
        // cy.get('[title ="25"]').should('be.visible')

        cy.get(driver_age_list).select('26', {force: true}).should('have.value', '26')
        // cy.get('[title ="26"]').should('be.visible')
        
    })

})