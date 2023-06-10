package service

import "github.com/DocumentAutomationTool/pkg/repository"

/*
*
*	интерфейст Authorization - набор методов бизнес-логики
*
 */
type Authorization interface {
}

/*
*
*	структура Service - набор интерфейсов бизнес-логики
*
 */
type Service struct {
	Authorization
}

/*
*
*	функция	NewService - инициализация набора бизнес-логики
*	(r *repository.Repository)
*	возвращает *Service
*
 */
func NewService(r *repository.Respository) *Service {
	return &Service{}
}
