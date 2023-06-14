package service

import (
	autotool "github.com/DocumentAutomationTool"
	"github.com/DocumentAutomationTool/pkg/repository"
)

/*
*	интерфейст Authorization - набор методов бизнес-логики
 */
type Authorization interface {
	CreateUser(user autotool.User) (int, error)
	GenerateToken(email, password string) (string, error)
	ParseToken(token string) (int, error)
}

/*
*	структура Service - набор интерфейсов бизнес-логики
 */
type Service struct {
	Authorization
}

/*
*	функция	NewService - инициализация набора бизнес-логики
*	(r *repository.Repository)
*	возвращает *Service
 */
func NewService(r *repository.Respository) *Service {
	return &Service{
		Authorization: NewAuthService(r.Authorization),
	}
}
