package core

type CtpError struct {
	IsCtpError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCtpError(code string, msg string, ctx *Context) *CtpError {
	return &CtpError{
		IsCtpError: true,
		Sdk:              "Ctp",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CtpError) Error() string {
	return e.Msg
}
