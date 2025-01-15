package com.codeMeet.service;

import com.codeMeet.entity.Comment;

import java.util.List;

public interface CommentService {

    Comment createComment(Long postId, String postBy, String content);
    List<Comment> getCommentsByPostId(Long postId);
}
