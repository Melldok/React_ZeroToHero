# React Hooks

## useState :

Todos los componentes de React tienen un estado, que puede cambiar con el tiempo. En el caso del hook Use State, lo manipularemos con desestructuración. 

```js 

const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target.value)
  }
```

Como se puede observar, el estado no se cambia directamente, sino con una función. Usamos la desesttructuración para cambiar los estados, declarando una variable y su setter, con useState(). Podemos declarar el valor inicial que queramos dentro de los paréntesis. Podemos utilizar variables declaradas o datos estáticos.

## useState con objetos: 

```js
  export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    const {counter1, counter2, counter3} = counter

  return (
    <>
        <h1>Counter: {counter1}</h1>
        <h1>Counter: {counter2}</h1>
        <h1>Counter: {counter3}</h1>


        <hr />

        <button className="btn" onClick={ () => setCounter({

            ...counter,
            counter1: counter1 +1,

        })}>+1</button>
    </>
  )
}
``` 

Cuando queremos usar useState con un objeto, debemos mandar todos los valores del objeto a actualizar. Si queremos conservar inalteradas las el resto de propiedades del objeto, piodemos usar el operador spread.


## useEffect

Este hook se utiliza principalmente para evitar la repetición de peticiones, es decir, queremos que se dispare un efecto cuando ocurra X cosa.

```js
        useEffect( () => {
        getGifs(category)
    },[])
```

useEffect tiene dos argumentos. Una función (callback) y una lista de dependencias (Las condiciones sobre las que queremos volver a ejecutar nuestra función) Si dejamos esto como un array vacío, la función se disparará solo la primera vez que se construye nuestro componente.

## Custom Hooks

Los custom hoooks se utilizan para ahorrarnos mucha lógica y código en la creación de componentes. Además es reutilizable en otros hooks. Utiliza el principio "Dont repeat yourself". Como convención, se inician desestructurando un objecto y utilizando use. Como con otros hooks. 

**--Un hook no es más que una función que regresa algo--**

**Declaración del custom hook con desestructuración en el componente**

```js
  export const GifGrid = ({ category }) => {  

    const {images, isLoading} = useFetchGifs( category );
  
    return (
        <>
            <h3>{ category }</h3>

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifCard 
                            key={image.id}
                            {...image}
                            />
                    ))
                }
            </div>
            
        </>
  )
}


```
**Fabricación del custom hook**

```js
  export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false)
        }

    useEffect( () => {
        getImages();
    },[])

 return {
    images,
    isLoading
 }
}

```


Tanto las helper functions como los custom hooks son funciones. La diferencia principal entre una helper function y un custom hook es que el custom hook utiliza otros hooks (State, Effect..) para realizar su lógica, y además interviene en el ciclo de vida del componente. A diferencia de las helper functions que sirven para realizar acciones lógicas concretas.



## useRef

Nos permite mantener una referencia, y cuando esa referencia cambia, no re-renderizar nuestro componente Podemos utilizarlo para apuntar a elementos HTML, como ocurre en el ejmeplo de abajo. O podemos guardar valores boolean, etc. 

```js

    export const FocusScreen = () => {

      const inputRef = useRef();
      const onClick = () => {
        //Selecciona al input que hemos hecho referencia mas abajo. 
        inputRef.current.select();
      }


      return (
        <>
          <h1>Focus Screen</h1>
          <hr />

          <input 
              
              ref={inputRef}
              type="text"
              placeholder="Set your name" 
              className="form-control"
              onClick={onClick}
          />

          <button className="btn btn-primary mt-2">
            Set Focus
          </button>
        </>
      )
    }
```


## useLocaton 

Permite lcoalizar la ruta activa que estamos utilizando en este momento. Muy útil si queremos cambiar algún elemento del DOM dependiendo de ella.


## MEMO y useMemo

Cuando puede haber una depreciación considerable del rendimiento, es decir, componentes muy pesados y tenemos por ejemplo peticiones a db realizandose directamente en el componente, podemos utilizar el memo, lo cual nos permitirá realizar ciertas acciones solamente si las props del componente cambian en algun momento. Memo le dice a react que memorice un componente. 


```js 
  export const Small = memo(({value}) => {

  //Solamente cuando las props de Value cambien, se volvera a ejecutar el console log. Para eso sirve memo.
    console.log(' I generated again ')

  return (
    <small>{value}</small>
  )
})

  //En este caso, estamos utilizando el hook de useMemo, el cual nos permite decirle en el array de dependencia que solo queremos que se ejecue cuando el valor de counter cambie. 

   const memorizedValue = useMemo( () => heavyStuff(counter), [counter] ) 
```


## useCallback

Para memorizar funciones, debemos utilizar este hook, ya que las funciones apuntan a espacios de memoria, y ese espacio cambia cada vez que un elemento es renderizado. Por tanto si utilizaramos memo con una funcion pasada como props, no se aplicaria y se seguiria rerenderizando la accion. 

```js

    const increment = useCallback(
      (c) => {
        setCounter((value) => c + value);
      },
      [],
    )

export const ShowIncrement = memo(({ increment }) => {

    console.log("I rendered again")

  return (
    <button 
    className="btn btn-primary"
    onClick={() => {
        increment(5); 
    }}
    >
        Increment
    </button>
  )
})
```

## Reducer 
  
  Es una funcion normal y corriente
  Debe de ser una funcion pura
    - No debe tener efectos secundarios
    - No debe tener tareas asincronas
    - Debe retornar siempre un nuevo estado, no debemos mutar el estado
    - No debe llamar el locaStorage o sessionStorage dentro del reducer
    - No debe de requerir mas de una accion que puede tener un argumento
  Debe retornar un nuevo estado
  Usualmente solo recibe dos argumentos
    - El valor inicial
    - La accion a ejecutar

## useReducer 

Funciona como alternativa a useState, se suele utilizar con estados mas complejos. Sobre todo si se tienen que manejar muchos estados al mismo timepo.

```js
  
  const todoReducer = ( initialState = [], action ) => {
    switch ( action.type ) {
        case 'Add Todo':
           return [ ...initialState, action.payload ]
        
        case 'Delete Todo' :
            return initialState.filter( todo => todo.id !== action.payload );
        
        case 'Toggle Todo' :
            return initialState.map( todo => {
                if(todo.id === action.payload){//id
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })

        case 'Update Todo' :
            return initialState.map( todo => {
                if(todo.id === action.id){//id
                    return{
                        ...todo,
                        description: action.payload
                    }
                }
                return todo
            })

        default:
            return initialState;
    }
}
```

useReducer tiene tres argumentos. Sirve para realizar diferentes acciones en nuestra aplicacion, que definimos con el type y el payload. EL type es el tipo de accion que queremos hacer, por ejemplo añadir, y el payload es el valor que tiene la acción una vez realizada. 


```js

   const init = () => {
        // Try to parse what is inside of todos, if its empty. bring an empty array
        return JSON.parse(localStorage.getItem('todos')) || [];
    }


    const [ todos, dispatchTodo ] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }

        dispatchTodo( action )
    }

    const handleDeleteTodo = (id) => {
        dispatchTodo({
            type: 'Delete Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatchTodo({
            type: 'Toggle Todo',
            payload: id
        })
    }


    const handleUpdateTodo = (id, newTodo) => {
        const action = {
            type: "Update Todo",
            id: id,
            payload: newTodo
        }
        dispatchTodo(action)
      };
    

```


## useContext 

useContext nos ayuda a romper la referencia de la informacion, para que esta no tenga que fluir de manera escalonada entre parientes sino de una forma mas directa. La idea es tener centralizado en un lugar, el contexto, la informacion, para que los sucesivos componentes puedan acceder a ella de forma directa. Es un tipo de comunicacion entre componentes sin props. 

### Declarando el contexto

```js
  export const UserContext = createContext();
```

### Consumiendo el contexto 

```js
    const something = useContext( UserContext );

```

Lo mas beneficioso es poder acceder a esta informacion desde cualquier parte de nuestra aplicacion, sin tener que hacer que la informacion viaje de forma tediosa de padres a hijos y nietos. useContext siempre viaja y busca la informacion hacia arriba, no hacia abajo. 

### Desestructurando para acceder a la informacion concreta elegida

```js
    const { hola, user } = useContext( UserContext );
```