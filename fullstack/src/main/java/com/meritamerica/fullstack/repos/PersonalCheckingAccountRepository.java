package com.meritamerica.fullstack.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.meritamerica.fullstack.models.PersonalCheckingAccount;

public interface PersonalCheckingAccountRepository extends JpaRepository<PersonalCheckingAccount, Long> {
	
	List<PersonalCheckingAccount> findByAccountholder(long id);

}
