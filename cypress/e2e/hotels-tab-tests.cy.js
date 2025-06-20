///<reference types = "Cypress"/>

describe('Hotels Tab Tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy="Hotels"]').click({ force: true });
      });

    it('going to box', () => {
  
      cy.get('[placeholder="Destination, hotel name"]').should("be.visible")
  
    })
  
  
   it('check-in box', () => {
  
      cy.get('[id="input-start"]').should("be.visible")
  
    })

    it('check-out box', () => {
  
          cy.get('[id="input-end"]').should("be.visible")
      
        })

    it('travelers box', () => {
  
        cy.get('[name="traveller"]').should("be.visible")
    
      })
  
      it('add a flight checkbox', () => {
  
        cy.get('[data-cy="flight_chk"]').should("be.visible")
    
      })

      it('add a car checkbox', () => {
  
        cy.get('[data-cy="cars_chk"]').should("be.visible")
    
      })
      
      it('search button', () => {
  
        cy.get('[type="submit"]').should("be.visible")
    
      })
      

  })