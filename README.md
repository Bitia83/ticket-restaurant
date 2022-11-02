# ticket-restaurant
This project uses basic HTML, bootstrap and Javascript

the objetive is to print out product data from the Api fake using json-server for a restaurant ticket.

## 🔊STEP ONE : Run /Server

Start JSON Server in local

```bash
 json-server --watch db.json
```
Now if you go to http://localhost:3000/products/,  you'll get :

 {
    "products":
    [
    {
      "product": "water",
      "type": "drinks",
      "quantity": 10,
      "unitPrice": 1
    },
    {
      "product": "chicken wings",
      "type": "food",
      "quantity": 3,
      "unitPrice": 5
    },
    {
      "product": "steak",
      "type": "food",
      "quantity": 1,
      "unitPrice": 9
    },
    {
      "product": "coffee",
      "type": "drinks",
      "quantity": 4,
      "unitPrice": 2
    },
    {
      "product": "wine bottle",
      "type": "drinks",
      "quantity": 1,
      "unitPrice": 7
    }
  ]
}


## 🔊STEP TWO : Execute html

Open live server from index.html
