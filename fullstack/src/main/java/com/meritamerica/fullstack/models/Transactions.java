package com.meritamerica.fullstack.models;

import com.meritamerica.fullstack.exceptions.ExceedsAvailableBalanceException;
import com.meritamerica.fullstack.exceptions.NegativeAmountException;

public class Transactions {
	
	
	
	
	public boolean withdraw(BankAccount account, double amount) 
			throws ExceedsAvailableBalanceException, NegativeAmountException {
	
	if(amount <= 0) { throw new NegativeAmountException(); }
	if(amount > account.balance) { throw new ExceedsAvailableBalanceException(); }
	
	account.balance -= amount;
	return true;
}

	public boolean deposit(BankAccount account, double amount) throws NegativeAmountException {
		if(amount <= 0) { throw new NegativeAmountException(); }
		
		account.balance += amount;
		return true;
	}
	
	
public void transfer(BankAccount from,BankAccount to, double amount) throws ExceedsAvailableBalanceException, NegativeAmountException {
		
		if(amount <= 0) { throw new NegativeAmountException(); }
		if(amount > from.balance) { throw new ExceedsAvailableBalanceException(); }
		withdraw(from, amount);
		deposit(to, amount);
		}
	
	public void closeAccount(BankAccount closing, BankAccount staying) throws ExceedsAvailableBalanceException, NegativeAmountException {
		if(closing instanceof RolloverIRA|| closing instanceof RothIRA || closing instanceof StandardIRA) {
			double balance = closing.getBalance();
			withdraw(closing, balance);
			deposit(staying,(balance *0.8));
		} else if (closing instanceof DBACheckingAccount|| closing instanceof PersonalCheckingAccount || closing instanceof CDAccount) {
			double balance = closing.getBalance();
			withdraw(closing, balance);
			deposit(staying,balance);
		
		}
	}
	

}
