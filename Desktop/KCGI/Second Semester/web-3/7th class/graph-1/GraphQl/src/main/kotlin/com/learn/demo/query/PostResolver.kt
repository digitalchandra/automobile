package com.learn.demo.query

import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller

@Controller
class PostResolver {

    @QueryMapping
    fun getPosts(): List<PostDto> {
        return listOf(
            PostDto(
                teacher = "Dr.Abar",
                title = "GraphQl Demo Project",
                greeting = "Welcome to my First GraphQL Spring Boot project"
            )
        )
    }

    @QueryMapping
    fun getGet(): List<GetData> {
        return listOf(
            GetData(
                name = "KCGI",
                address = "Japan",
                message = "Hello Welcome"
            )
        )
    }
}

data class PostDto(
    val teacher: String,
    val title: String,
    val greeting: String? = null
)

data class GetData(
    val name: String,
    val address: String,
    val message: String
)
