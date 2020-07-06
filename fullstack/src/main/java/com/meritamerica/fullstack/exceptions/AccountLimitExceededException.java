package com.meritamerica.fullstack.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class AccountLimitExceededException extends Exception{
	static final long serialVersionUID = 1002L;

	public AccountLimitExceededException(String msg) {
		super(msg);
	}
	
	public AccountLimitExceededException () {
		super("Only one personal checking account allowed per account holder");
	}
}