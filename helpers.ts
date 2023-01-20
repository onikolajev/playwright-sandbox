import { expect } from "@playwright/test"

let url = 'https://reqres.in/api';

export async function reqresGetUsers(request, pageNumber: number, assert = true){
    const response = request.get(`${url}/users?page=${pageNumber}`)
    let responseBody=JSON.parse(await (await response).text())

    if (assert){
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
        return responseBody
    }
    return response
}

export async function reqresGetUser(request, id: number, assert = true){
    const response = request.get(`${url}/users/${id}`)
    expect((await response).status()).toBe(200)
    let responseBody=JSON.parse(await (await response).text())
    
    if (assert){
        expect((await response).status()).toBe(200)
        expect(responseBody.data.id).toBeTruthy();
        expect(responseBody.data.email).toBeTruthy();
        expect(responseBody.data.first_name).toBeTruthy();
        expect(responseBody.data.last_name).toBeTruthy();
        expect(responseBody.data.avatar).toBeTruthy();
        expect(responseBody.support.url).toBeTruthy();
        expect(responseBody.support.text).toBeTruthy();
        return responseBody
    }

    return response
}