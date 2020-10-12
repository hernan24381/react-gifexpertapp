const { useFetchGifs } = require('../../hooks/useFetchGifs');
const { renderHook } = require('@testing-library/react-hooks');

// como no se renderiza nada no se puede hacer match con el snapshop
describe('Pruebas en el hook useFetchGifs', () => {
  
    test('debe de retornar el estado inicial', async() => {
        
        //const {data, loading} = useFetchGifs( 'One Punch' );
        //console.log(data, loading);

        const { result, waitForNextUpdate } = renderHook(()=> useFetchGifs( 'One Punch' ));
        const {data, loading} = result.current;
    
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
        

    })
    

    test('debe de retornar un arreglo de imgs y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook(()=> useFetchGifs( 'One Punch' ));
        await waitForNextUpdate();
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);


    })
    




})



