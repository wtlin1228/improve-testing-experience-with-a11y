describe('react-app', () => {
  beforeEach(() => cy.visit('/'));

  it('form', () => {
    // get input by label
    cy.get('[data-test-id="i18n.form.field.title"]').then(($label) => {
      const forInput = $label.attr('for');
      cy.get(`[name="${forInput}"]`).type('test');
    });

    // get helper text by input
    // helper text is not visible by default
    cy.get('[name="title"]').then(($input) => {
      const id = $input.attr('aria-describedby').split(' ')[0];
      cy.get(`#${id}`).contains('Title will be put on the top of your post.');
    });

    // get error message by input
    // error message is not visible by default
    cy.get('[name="title"]').then(($input) => {
      const id = $input.attr('aria-describedby').split(' ')[1];
      cy.get(`#${id}`).contains('Required');
    });
  });

  it('graphical element', () => {
    // get visual indication by aria-label
    cy.get('[aria-label="hide"]').click();
  });

  it('description list', () => {
    // get description by term
    cy.get('[data-test-id="i18n.summary.price"]')
      .closest('dl')
      .find('dd')
      .contains('$200');
  });

  it('table', () => {
    // get table by caption
    cy.get('[data-test-id="i18n.table.caption"]').closest('table');

    // get table's header row
    cy.get('[data-test-id="i18n.table.caption"]')
      .closest('table')
      .find('thead tr')
      .within(() => {
        cy.get('th').eq(0).contains('i18n.table.col.header.order_id');
        cy.get('th').eq(1).contains('i18n.table.col.header.order_by');
      });

    // get table's body rows
    cy.get('[data-test-id="i18n.table.caption"]')
      .closest('table')
      .find('tbody tr')
      .first()
      .within(() => {
        cy.get('td').eq(0).contains('9mq1123p');
        cy.get('td').eq(1).contains('Leo');
      });

    cy.get('[data-test-id="i18n.table.caption"]')
      .closest('table')
      .find('tbody tr')
      .eq(1)
      .within(() => {
        cy.get('td').eq(0).contains('mkq12ie4');
        cy.get('td').eq(1).contains('Leo');
      });
  });
});
