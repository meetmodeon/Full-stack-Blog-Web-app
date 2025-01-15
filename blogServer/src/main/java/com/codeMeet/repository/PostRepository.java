package com.codeMeet.repository;

import com.codeMeet.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository

public interface PostRepository extends JpaRepository<Post,Long> {

    List<Post> findAllByNameContaining(String name);

}
