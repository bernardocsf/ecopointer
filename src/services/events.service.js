// define a service for accessing USER data
//  GET / -> get API welcoming message
//  GET /users -> get all users (ADMIN only)
//  GET /users/{id} -> get 1 user (ADMIN or authenticated user)


import API_URL from './config.js'

function authHeader() {
    // checks Local Storage for user item
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user.accessToken)

    // if there is a logged in user with accessToken (JWT)
    if (user && user.accessToken) {
        console.log(user.accessToken)
        // return HTTP authorization header for Node.js Express back-end
        return {
            'Content-Type': 'application/json',
            'x-access-token': user.accessToken
        };
    }
        
    //otherwise, return an empty object
    return { 'Content-Type': 'application/json' };
}


export const EventService = {
    async addEvento(evento) {
        console.log(evento);
        
        const response = await fetch(`${API_URL}/Ecopointer/events/event`, {
            
            method: "POST",
            headers: 
                authHeader(),
            body: JSON.stringify({
                nome: evento.nome,
                descricao:evento.descricao,
                cidade:evento.cidade,
                data:evento.data,
                imagem:evento.imagem ,
                user: evento.user,
                
            })
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log(evento)
            throw Error(handleResponses(response.status));
            
        }
    },
     async fetchOneUserByID(id) {
         const response = await fetch(`${API_URL}/Ecopointer/users/user/${id}`, {
             method: "GET",
             headers: authHeader()
         });
         if (response.ok) {
             let data = await response.json();
              console.log("USER SERVICE - fetch 1 USER")
             console.log(data)
             return data;
         }
         else
         {
              console.log("USER SERVICE - fetch 1 USER")
              console.log(response)
             throw Error(handleResponses(response.status));
         }
     },
     async deleteEventByID(id) {
        const response = await fetch(`${API_URL}/Ecopointer/events/event/${id}`, {
            method: "DELETE",
            headers: authHeader()
         });
         if (response.ok) {
           let data = await response.json();
             console.log("Delete event ")
             console.log(data)
             return data;
         }
         else
         {
             console.log("Delete event - error")
             console.log(response)
            throw Error(handleResponses(response.status));
         }
     },
     async updateEventByID(id, updatedEvent) {
        console.log(id)
        console.log(updatedEvent);
        updatedEvent.gostos++
        const response = await fetch(`${API_URL}/Ecopointer/events/event/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            ...authHeader()
          },
          body: JSON.stringify(updatedEvent)
        });
      
        if (response.ok) {
          let data = await response.json();
          console.log("Update event");
          console.log(data);
          return data;
        } else {
          console.log("Update event - error");
          console.log(response);
          throw Error(handleResponses(response.status));
        }
      },

    async fetchAllEvents() {
        // console.log(" USER SERVICE - fetch ALL USERS started...")
        // return axios.get(API_URL + 'admin', { headers: authHeader() });
        const response = await fetch(`${API_URL}/Ecopointer/events/event`, {
            method: "GET",
            headers: authHeader()
        });
        if (response.ok) {
            let data = await response.json();
             console.log("USER SERVICE - fetch ALL USERS")
             console.log(data)
            return data;
        }
        else
        {
            console.log("USER SERVICE - fetch ALL USERS: ERROR ");
             console.log(response)
            throw Error(handleResponses(response.status));
        }
            
    },

    // sends request to API root
    async getPublicContent() {
        // return axios.get(API_URL);
        const response = await fetch(`${API_URL}`, {
            method: "GET" // requires NO authorization header
        });
        if (response.ok) {
            let data = await response.json();
            // console.log("USER SERVICE - fetch WELCOMING MESSAGE")
            // console.log(data) // data = "Welcome to the TUTORIALS api"
            return data;
        }
        else
            throw Error(handleResponses(response.status));
    }
}

export default EventService;


function handleResponses(code) {
    let message = "";
    switch (code) {
        case 401:
            message = "Not allowed to executed this action!";
            break;
        case 403:
            message = "Forbidden access";
            break;
        default:
            message = "Unkown message";
            break;
    }
    return message;
}