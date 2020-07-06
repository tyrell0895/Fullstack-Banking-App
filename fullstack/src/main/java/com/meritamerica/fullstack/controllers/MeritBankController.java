package com.meritamerica.fullstack.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.meritamerica.fullstack.exceptions.AccountLimitExceededException;
import com.meritamerica.fullstack.exceptions.NegativeAmountException;
import com.meritamerica.fullstack.exceptions.NotFoundException;
import com.meritamerica.fullstack.models.*;
import com.meritamerica.fullstack.repos.*;
import com.meritamerica.fullstack.security.JwtUtil;
import com.meritamerica.fullstack.security.MyUserDetailsServices;

@RestController
public class MeritBankController {
	List<String> strings = new ArrayList<String>(); 
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private MyUserDetailsServices userDetailsServices;
	@Autowired
	private JwtUtil jwtTokenUtil;
	@Autowired
	private AccountHolderContactDetailsRepository accountHolderContactRepo;
	@Autowired
	private AccountHolderRepository accountHolderRepo;
	@Autowired
	private CDAccountRepository cdAccountRepo;
	@Autowired
	private CDOfferingRepository cdOfferingRepo;
	@Autowired
	private PersonalCheckingAccountRepository personalCheckingAccountRepo;
	@Autowired
	private SavingsAccountRepository savingsAccountRepo;
	@Autowired
	private UsersRepository usersRepository;
	@Autowired
	private DBACheckingAccountRepository dbaRepo;
	
	

	//List<AccountHolder> ac = new ArrayList<AccountHolder>(); 

	//List<CheckingAccount> ca = new ArrayList<CheckingAccount>(); 

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String test() {
		return "Welcome to MeritBank"; 
	}

	@GetMapping(value="/strings") //@RequestMapping(value = "/strings", method = RequestMethod.GET)
	public List<String> getStrings() {
		return strings; 
	}

	@PostMapping(value = "/strings")
	//http://localhost:8080/strings POST, insert, then GET, you should see all inputs from prior
	public String addString(@RequestBody String string) {
		//String string = "test"; 
		strings.add(string); 
		return string; 

	} 

	@GetMapping(value = "/AccountHolders")

	public List<AccountHolder> getAccountHolders(){

		return accountHolderRepo.findAll();

	}

	@PostMapping(value = "/AccountHolders")
	@ResponseStatus(HttpStatus.CREATED)
	public AccountHolder addAccountHolder(@RequestBody @Valid AccountHolder accountHolder) {
		Users users = usersRepository.getOne(accountHolder.getAccountUserId());
		users.setAccount(accountHolder);
		accountHolder.setUser(users);
		accountHolderRepo.save(accountHolder);
		return accountHolder; 
	}

	@PostMapping(value = "/ContactDetails")
	@ResponseStatus(HttpStatus.CREATED)
	public void addContactDetails(@RequestBody @Valid AccountHolderContactDetails contactDetails) {
		accountHolderContactRepo.save(contactDetails);
	}

	@GetMapping(value = "/ContactDetails")
	public List<AccountHolderContactDetails> getContactDetails(){
		return accountHolderContactRepo.findAll();
	}

	//Check URL Mapping

	@GetMapping(value = "/AccountHolders/{id}")
	public AccountHolder getACById(@PathVariable (name = "id" )long id)  throws NotFoundException {
		//if (id > ac.size() -1) {
		//throw new NotFoundException ("invalid id"); 
		return accountHolderRepo.findById(id); 
	}

	@PostMapping(value ="/AccountHolders/{id}/DBACheckingAccounts")
	@ResponseStatus(HttpStatus.CREATED)
	public BankAccount addCheckingAccount(@RequestBody @Valid DBACheckingAccount checkingAccount, @PathVariable
			(name = "id") long id) throws NotFoundException{
		AccountHolder a = accountHolderRepo.findById(id); 
		a.addDBACheckingAccount(checkingAccount);
		dbaRepo.save(checkingAccount); 
		return checkingAccount; 
	}
	@GetMapping(value = "/AccountHolders/{id}/DBACheckingAccounts")
	@ResponseStatus(HttpStatus.OK)
	public List<DBACheckingAccount> getDBACheckingAccount(@PathVariable (name = "id") long id) throws NotFoundException {
		return dbaRepo.findByAccountholder(id);


	
	}

	
	@PostMapping(value ="/AccountHolders/{id}/PersonalCheckingAccounts")
	@ResponseStatus(HttpStatus.CREATED)
	public BankAccount addCheckingAccount(@RequestBody @Valid PersonalCheckingAccount checkingAccount, @PathVariable
			(name = "id") long id) throws NotFoundException, AccountLimitExceededException{
		AccountHolder a = accountHolderRepo.findById(id); 
		a.addPersonalCheckingAccount(checkingAccount);
		personalCheckingAccountRepo.save(checkingAccount); 
		return checkingAccount; 
	}


	@GetMapping(value = "/AccountHolders/{id}/PersonalCheckingAccount")
	@ResponseStatus(HttpStatus.OK)
	public PersonalCheckingAccount getPersonalCheckingAccount(@PathVariable (name = "id") long id) throws NotFoundException {
		return accountHolderRepo.findById(id).getPersonalCheckingAccount();

		//AccountHolder a = accountHolderRepo.findById(id); 
		//return a.getCheckingAccounts(); 
	}
	@PostMapping(value ="/AccountHolders/{id}/SavingsAccounts")
	@ResponseStatus(HttpStatus.CREATED)
	public SavingsAccount addSavingsAccount(@RequestBody @Valid SavingsAccount savingsAccount, @PathVariable
			(name = "id") long id) throws NotFoundException{
		AccountHolder a = accountHolderRepo.findById(id);
		a.addSavingsAccount(savingsAccount); 
		savingsAccountRepo.save(savingsAccount);
		return savingsAccount; 
	}

	@GetMapping(value = "/AccountHolders/{id}/SavingsAccounts")
	@ResponseStatus(HttpStatus.OK)
	public List<SavingsAccount> getSavingsAccount(@PathVariable (name = "id") long id) throws NotFoundException {
		return savingsAccountRepo.findByAccountholder(id);


		//AccountHolder a = accountHolderRepo.findById(id); 
		//return a.getSavingsAccounts(); 
	}

	@PostMapping(value ="/AccountHolders/{id}/CDAccounts")
	@ResponseStatus(HttpStatus.CREATED)
	public CDAccount addCDAccount(@RequestBody @Valid CDAccount cdAccount, @PathVariable
			(name = "id") long id) throws NotFoundException{
		AccountHolder a = accountHolderRepo.findById(id); 
		a.addCDAccount(cdAccount);
		cdAccountRepo.save(cdAccount);

		return cdAccount; 
	}

	@GetMapping(value = "/AccountHolders/{id}/CDAccounts")
	@ResponseStatus(HttpStatus.OK)
	public List<CDAccount> getCDAccount(@PathVariable (name = "id") long id) throws NotFoundException {
		return cdAccountRepo.findByAccountholder(id);

		//AccountHolder a = accountHolderRepo.findById(id); 

		//return a.getCDAccounts(); 
	}

	@PostMapping(value ="/CDOffering")
	@ResponseStatus(HttpStatus.CREATED)
	public CDOffering addCDOffering(@RequestBody @Valid CDOffering cdOffering) {
		cdOfferingRepo.save(cdOffering); 
		return cdOffering; 
	}
	
	
	@PostMapping(value = "/")

	@GetMapping(value = "/CDOffering")
	@ResponseStatus(HttpStatus.OK)
	public List<CDOffering> getCDOffering() throws NotFoundException {
		return cdOfferingRepo.findAll(); 
	}

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest)throws Exception
	{ 

		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())	
					);
		}
		catch (BadCredentialsException e) {
			throw new Exception("Incorrect Credentials" ,e);
		}
		final UserDetails userDetails = userDetailsServices
				.loadUserByUsername(authenticationRequest.getUsername());
		
		final String jwt = jwtTokenUtil.generateToken(userDetails);
		//If successful we will call on a 201 status and the payload in the status will pass through
		//the response.
		return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}
	
	@PostMapping(value = "/authenticate/CreateUser")
	public ResponseEntity<?> createUser(@RequestBody Users users){
		usersRepository.save(users);
		return ResponseEntity.ok(users);
	}
	//The following endpoints have be adjusted; there was an issues with the methods and the type mismatching.
	//The solution was to add a .longValue() after get ID because ID type was Long and we needed to get the long value 
	@GetMapping(value = "/Me")
	public AccountHolder getMe(@RequestHeader (name = "Authorization")String token){
		token = token.substring(7);
		Users users = usersRepository.findByUsername(jwtTokenUtil.extractUsername(token)).get();
		Long x = users.getAccount().getId();
		return accountHolderRepo.findById(x.longValue());
	}
	
	@PostMapping(value = "/Me/PersonalCheckingAccount")
	public PersonalCheckingAccount addMeChecking(@RequestHeader (name = "Authorization")String token, @RequestBody PersonalCheckingAccount checking) throws NegativeAmountException, AccountLimitExceededException {
		token = token.substring(7);
		Users users = usersRepository.findByUsername(jwtTokenUtil.extractUsername(token)).get();
		AccountHolder account = accountHolderRepo.findById(users.getAccount().getId().longValue()); 
		account.addPersonalCheckingAccount(checking);
		personalCheckingAccountRepo.save(checking); 
		return checking; 
	}
	
	@GetMapping(value = "/Me/DBACheckingAccounts")
	public List<DBACheckingAccount> getMeDBAChecking(@RequestHeader (name = "Authorization")String token) {
		token = token.substring(7);
		Users users = usersRepository.findByUsername(jwtTokenUtil.extractUsername(token)).get();
		return accountHolderRepo.findById(users.getAccount().getId().longValue()).getDBACheckingAccounts();
	}
	
	@GetMapping(value = "/Me/PersonalCheckingAccounts")
	public PersonalCheckingAccount getMeChecking(@RequestHeader (name = "Authorization")String token) {
		token = token.substring(7);
		Users users = usersRepository.findByUsername(jwtTokenUtil.extractUsername(token)).get();
		return accountHolderRepo.findById(users.getAccount().getId().longValue()).getPersonalCheckingAccount();
	}
	
	@PostMapping(value = "/Me/SavingsAccounts")
	public SavingsAccount addMeSavings(@RequestHeader (name = "Authorization")String token, @RequestBody SavingsAccount savings) throws NegativeAmountException {
		token = token.substring(7);
		Users users = usersRepository.findByUsername(jwtTokenUtil.extractUsername(token)).get();
		AccountHolder account = accountHolderRepo.findById(users.getAccount().getId().longValue());
		account.addSavingsAccount(savings);
		accountHolderRepo.save(account);
		return savings;
	}
	
	@GetMapping(value = "/Me/SavingsAccounts")
	public List<SavingsAccount> getMeSavings(@RequestHeader (name = "Authorization")String token) {
		token = token.substring(7);
		Users users = usersRepository.findByUsername(jwtTokenUtil.extractUsername(token)).get();
		return accountHolderRepo.findById(users.getAccount().getId().longValue()).getSavingsAccounts();
	}
	
	@PostMapping(value = "/Me/CDAccounts")
	public CDAccount addMeCDAccount(@RequestHeader (name = "Authorization")String token, @RequestBody CDAccount cdAccount) throws NegativeAmountException {
		token = token.substring(7);
		Users users = usersRepository.findByUsername(jwtTokenUtil.extractUsername(token)).get();
		AccountHolder account = accountHolderRepo.findById(users.getAccount().getId().longValue());
		account.addCDAccount(cdAccount);
		accountHolderRepo.save(account);
		return cdAccount;
	}
	
	@GetMapping(value = "/Me/CDAccounts")
	public List<CDAccount> getMeCDAccount(@RequestHeader (name = "Authorization")String token) {
		token = token.substring(7);
		Users users = usersRepository.findByUsername(jwtTokenUtil.extractUsername(token)).get();
		return accountHolderRepo.findById(users.getAccount().getId().longValue()).getCDAccounts();
	}
	
	


}