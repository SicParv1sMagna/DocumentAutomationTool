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
