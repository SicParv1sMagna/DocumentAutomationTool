package service

import "github.com/DocumentAutomationTool/pkg/repository"

type Authorization interface {
}

type Service struct {
	Authorization
}

func NewService(r *repository.Respository) *Service {
	return &Service{}
}