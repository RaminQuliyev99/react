import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'

const Index = ()=>{
    const queryClient = new QueryClient()
    return (
    <div>
    <QueryClientProvider client={queryClient}>
           < App/>
    </QueryClientProvider>
    </div>
    )
}

let container = document.getElementById("root")
let root = createRoot(container)
root.render(<Index/>)
