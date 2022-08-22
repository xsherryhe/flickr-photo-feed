class StaticPagesController < ApplicationController
  def index
    @flickr = Flickr.new
    @flickr_user_id = params[:flickr_user_id]
    @photos =
      if params[:get_recent]
        @flickr.photos.getRecent(per_page: 20)
      elsif !@flickr_user_id.blank?
        flickr_user_photos
      end
  end

  private

  def flickr_user_photos
    @flickr.photos.search(user_id: @flickr_user_id)
  rescue Flickr::FailedResponse
    flash.now[:flickr_user_error] = 'Invalid user ID!'
    nil
  end
end
