import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";




describe('Pruebas en <PriateRoute>', () => { 
    
    
    
    test('Debe mostrar children si esta autenticado', () => {


        Storage.prototype.setItem = jest.fn();


        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Juan Carlos'
            }
        }

        render(

            <AuthContext.Provider value={contextValue}>
                <MemoryRouter >
                <PrivateRoute>
                    <h1>Ruta Privada</h1>
                </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>

        )

        expect(screen.getByText('Ruta Privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalled()



     

     })
 })