package org.flinthill.certamen

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform