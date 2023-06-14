package handler

import (
	"github.com/DocumentAutomationTool/pkg/service"
	"github.com/gin-gonic/gin"
)

/*
*	структура Handler - обработчик запрсоов
 */
type Handler struct {
	services *service.Service
}

/*
*	функция NewHandler - конструктор обработчиков запросов
*	(services *service.Service) - бизнес-логика
*	возвращает *Handler
 */
func NewHandler(services *service.Service) *Handler {
	return &Handler{services: services}
}

/*
*	функция InitRoutes - инциализация роутов
*	возвращает *gin.Engine
 */
func (h *Handler) InitRoutes() *gin.Engine {
	router := gin.New()
	router.Use(CORSMiddleware())

	auth := router.Group("/auth")
	{
		auth.POST("/sign-up", h.signUp)
		auth.POST("/sign-in", h.signIn)
	}

	api := router.Group("/api", h.userIndentity)
	{
		docs := api.Group("/docs")
		{
			docs.POST("/form-4B", h.form4B) // Форма 4Б
			docs.POST("/form-4V", h.form4V) // Форма 4В
			docs.POST("/form-17", h.form17) // Форма 17
			docs.POST("/PSI", h.psi)        // ПСИ
		}
	}

	return router
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {

		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Credentials", "true")
		c.Header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Header("Access-Control-Allow-Methods", "POST,HEAD,PATCH, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
