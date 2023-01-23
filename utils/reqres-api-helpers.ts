import { expect } from "@playwright/test"

let url = 'https://reqres.in/api';

export async function consoleLogResponse(response){
    console.log(response)
    let responseBody = JSON.parse(await response.text())
    console.log(responseBody)
}

export async function getUsers(request, pageNumber: number, assert = true){
    const response = await request.get(`${url}/users?page=${pageNumber}`) 

    if (assert){
        let responseBody=JSON.parse(await (await response).text())
        expect((await response).status()).toBe(200)
        expect(responseBody.page).toBeTruthy();
        expect(responseBody.per_page).toBeTruthy();
        expect(responseBody.total).toBeTruthy();
        expect(responseBody.data[0].id).toBeTruthy();
        expect(responseBody.data[0].email).toBeTruthy();
        expect(responseBody.data[0].first_name).toBeTruthy();
        expect(responseBody.data[0].last_name).toBeTruthy();
        expect(responseBody.data[0].avatar).toBeTruthy();
        expect(responseBody.support).toBeTruthy();
    }
    return response
}

export async function getUser(request, id: number, assert = true){
    const response = await request.get(`${url}/users/${id}`)
    
    if (assert){
        let responseBody=JSON.parse(await (await response).text())
        expect((await response).status()).toBe(200)
        expect(responseBody.data.id).toBeTruthy();
        expect(responseBody.data.email).toBeTruthy();
        expect(responseBody.data.first_name).toBeTruthy();
        expect(responseBody.data.last_name).toBeTruthy();
        expect(responseBody.data.avatar).toBeTruthy();
        expect(responseBody.support.url).toBeTruthy();
        expect(responseBody.support.text).toBeTruthy();
    }
    return response
}

export async function createUser(request, requestBody, assert = true){
    const response = await request.post(`${url}/users`, requestBody)

    if (assert){
        let responseBody = JSON.parse(await response.text())
        expect(await response.status()).toBe(201)
        expect(responseBody.name).toBeTruthy()
        expect(responseBody.job).toBeTruthy()
        expect(responseBody.id).toBeTruthy()
        expect(responseBody.createdAt).toBeTruthy()
    }
    return response
}