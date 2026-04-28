/**
 * @jest-environment jsdom
 */
const code = require('../public/js/code.js');

describe('readCookie', () => {
    test('should correctly parse userId from cookie string', () => {
        // Mock the document.cookie property
        Object.defineProperty(document, 'cookie', {
            writable: true,
            value: 'firstName=Anna,lastName=Lee,userId=55',
        });

     
        delete window.location;
        window.location = { href: '' };

        code.readCookie();
        
        // Check if the logic correctly parsed the ID
    expect(code.getUserId()).toBe(55);    
    });
});