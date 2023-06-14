package autotool

import (
	"context"
	"net/http"
	"time"
)

type Server struct {
	httpServer *http.Server
}

/*
*	функция Run - запуск сервера
*	(port string) - порт сервера
*	(handler http.Handler) - обработчик запросов
*	возвращает error
 */
func (s *Server) Run(port string, handler http.Handler) error {
	s.httpServer = &http.Server{
		Addr:           ":" + port,
		Handler:        handler,
		MaxHeaderBytes: 1 << 20, // 1 MB
		ReadTimeout:    10 * time.Second,
		WriteTimeout:   10 * time.Second,
	}

	return s.httpServer.ListenAndServe()
}

/*
*	функция Stop - остановка работы сервера
*	(ctx context.Context) - контекст
*	вощвращает error
 */
func (s *Server) Shutdown(ctx context.Context) error {
	return s.httpServer.Shutdown(ctx)
}
